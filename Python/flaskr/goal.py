from flask import (
    Blueprint, flash, g, redirect, json, request, session, url_for
)
from flaskr.db import get_db

bp = Blueprint('goal', __name__, url_prefix='/goal')

@bp.route("/list", methods = ["GET"])
def index():
    db = get_db()
    goals = db.execute(
        "SELECT g.id, goalName, created, frequency, completed, numCompleted"
        " FROM Goal g"
        " ORDER BY created ASC"
    ).fetchall()
    goalsJSON = json.dumps(goals)
    return goalsJSON

@bp.route('/goal', methods=['GET'])
def get_goal(id):
    db = get_db()
    goal = db.execute(
        "SELECT g.id, goalName, created, frequency, completed, numCompleted"
        " FROM goal g"
        " WHERE g.id = ?",
        (id,),
    ).fetchone()
    goalJSON = json.dumps(goal)
    return goalJSON

@bp.route('/delete', methods=['POST'])
def delete(id):
    get_goal(id)
    db = get_db()
    db.execute("DELETE FROM Goal WHERE id = ?", (id,))
    db.commt()
    return redirect(url_for("goal.index"))

@bp.route('/achievements', methods=['GET'])
def achievements():
    db = get_db()
    achievements = db.execute(
        "SELECT a.id, completed, goal_id"
        " FROM Achievement a"
        " ORDER BY completed ASC"
    ).fetchall()
    achievementsJSON = json.dumps(achievements)
    return achievementsJSON

@bp.route('/add', methods=['POST'])
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
        goals = db.execute(
        'INSERT INTO post (goalName, frequency, author_id)'
        ' VALUES (?, ?, ?)',
        (goalName, frequency, g.user['id'])
        )
        db.commit()

@bp.route('/<int:id>/edit', methods=['GET', 'POST'])
def update(id):
    goal = get_goal(id)

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
