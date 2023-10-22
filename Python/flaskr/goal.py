from flask import (
    Blueprint, flash, g, redirect, json, request, session, url_for
)
from flaskr.db import get_db
from flaskr.auth import login_required
from flask_cors import CORS, cross_origin

bp = Blueprint('goal', __name__, url_prefix='/goal')

@bp.route("/list", methods = ["GET"])
@cross_origin()
@login_required
def list():
    db = get_db()
    goals = db.execute(
        "SELECT g.id, goalName, created, frequency, completed, numCompleted"
        " FROM Goal g"
        " ORDER BY created ASC"
        " WHERE g.user_id = ?",
        (g.user['id'],)
    ).fetchall()
    goalsJSON = json.dumps(goals)
    return goalsJSON

@bp.route('/goal', methods=['GET'])
@cross_origin()
@login_required
def get_goal(id):
    db = get_db()
    goal = db.execute(
        "SELECT g.id, goalName, created, frequency, completed, numCompleted"
        " FROM Goal g"
        " WHERE g.id = ?",
        (id,)
    ).fetchone()
    goalJSON = json.dumps(goal)
    return goalJSON

@bp.route('<int:id>/delete', methods=['POST'])
@cross_origin()
@login_required
def delete(id):
    get_goal(id)
    db = get_db()
    db.execute("DELETE FROM Goal WHERE id = ?", (id,))
    db.commt()
    return redirect(url_for("goal.index"))

@bp.route('/achievements', methods=['GET'])
@cross_origin()
@login_required
def achievements():
    db = get_db()
    history = db.execute(
        "SELECT a.id, completed, goal_id, "
        " FROM History h INNER JOIN Goal g"
        " ORDER BY completed ASC"
        " WHERE g.user_id = ?",
        (g.user['id'],)
    ).fetchall()
    historyJSON = json.dumps(history)
    return historyJSON

@bp.route('<int:id>/add', methods=['POST'])
@cross_origin()
@login_required
def add():
    goalName = request.form['goalName']
    frequency = request.form['frequency']
    error = None

    if not goalName:
        error = 'Title is required.'

    if error is not None:
        flash(error)
    else:
        db = get_db()
        db.execute(
        'INSERT INTO Goal (goalName, frequency, user_id)'
        ' VALUES (?, ?, ?)',
        (goalName, frequency, g.user['id'])
        )
        db.commit()

@bp.route('/<int:id>/edit', methods=['GET', 'POST'])
@cross_origin()
@login_required
def update(id):
    if request.method == 'POST':
        goalName = request.form['goalName']
        frequency = request.form['frequency']
        error = None

        if not goalName:
            error = 'Goal Name is required.'

        if error is not None:
            flash(error)
        else:
            db = get_db()
            goalEdit = db.execute(
                'UPDATE Goal SET goalName = ?, frequency = ?'
                ' WHERE id = ?',
                (goalName, frequency, id)
            )
            db.commit()
        
        goalEditJSON = json.dumps(goalEdit)
        return goalEditJSON
    
@bp.route('/complete', methods=['POST'])
@cross_origin()
@login_required
def complete_goal(id):
    goal = get_goal(id)
    db = get_db()
    goalEdit = db.execute(
        'UPDATE Goal SET completed ?',
        ("1")
    )
    db.commit()
    return True
