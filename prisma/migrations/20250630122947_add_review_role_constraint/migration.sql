-- This is an empty migration.
ALTER TABLE "Review" ADD CONSTRAINT "rating_value_between_1_and_5" CHECK (rating >= 1 AND rating <= 5);