"""Change type of reminder-time

Revision ID: d5c75098e0f1
Revises: c54dd4ee9d4c
Create Date: 2020-02-08 22:23:39.521862

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'd5c75098e0f1'
down_revision = 'c54dd4ee9d4c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'reminder_time',
                    existing_type=postgresql.TIME(),
                    type_=sa.String(),
                    existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'reminder_time',
                    existing_type=sa.String(),
                    type_=postgresql.TIME(),
                    existing_nullable=True)
    # ### end Alembic commands ###
