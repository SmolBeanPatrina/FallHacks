from flask import (
    Blueprint, flash, g, redirect, json, request, session, url_for
)
from flaskr.db import get_db

bp = Blueprint('goal', __name__, url_prefix='/goal')

@bp.route("/", methods = ["GET"])
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





