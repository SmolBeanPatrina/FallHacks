from flask import (
    Blueprint, flash, g, redirect, json, request, session, url_for
)
from flaskr.db import get_db

bp = Blueprint('goal', __name__, url_prefix='/goal')

@bp.route("/goals", methods = ["GET"])
def index():
    """Show all the goals, most recent first."""
    db = get_db()
    goals = db.execute(
        "SELECT g.id, goalName, created, frequency, completed, numCompleted"
        " FROM goal g"
        " ORDER BY created DESC"
    ).fetchall()
    dbJSON = json.dumps(goals)
    return dbJSON


# @bp.route('/addGoal', methods=('GET'))
# def getGoal(id):
#     goal = (
#         get_db()
#         .execute(
#             "SELECT"
#         )
#     )

# @bp.route('/addGoal', methods=('POST'))
# def addGoal():
#     goalName = request.form['goalName']
#     frequency = request.form['frequency']

# @bp.route('/editGoal', methods=('GET', 'POST'))
# def addGoal():
#     goalName = request.form['goalName']
#     frequency = request.form['frequency']

# @bp.route('/<int:id>/delete', methods=('POST',))
# def delete(id):
#     get_post(id)
#     db = get_db()
#     db.execute('DELETE FROM post WHERE id = ?', (id,))
#     db.commit()
#     return redirect(url_for('blog.index'))