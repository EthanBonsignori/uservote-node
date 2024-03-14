/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: "id",
    username: { type: "varchar(20)", notNull: true },
    password: { type: "text", notNull: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createType("feature_request_category", [
    "requested",
    "planned",
    "in-progress",
    "released",
    "wont-do",
  ]);

  pgm.createTable("feature_requests", {
    id: "id",
    content: { type: "text", notNull: true },
    votes: { type: "integer", notNull: true, default: 0 },
    category: { type: "feature_request_category", default: "requested" },
    author_id: {
      type: "int",
      notNull: true,
      references: "users",
    },
    author_username: {
      type: "varchar(20)",
      notNull: true,
    },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createTable("comments", {
    id: "id",
    content: { type: "text", notNull: true },
    feature_request_id: {
      type: "int",
      notNull: true,
      references: "feature_requests",
    },
    author_id: {
      type: "int",
      notNull: true,
      references: "users",
    },
    author_username: {
      type: "varchar(20)",
      notNull: true,
    },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("comments");
  pgm.dropTable("feature_requests");
  pgm.dropType("feature_request_category");
  pgm.dropTable("users");
};
