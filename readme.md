# Sourcey

Qualitative researchers need platforms to share their work with the public. Sourcey is an easy-to-use platform to publish informational modules, synthesizing research in a way that is simple, accessible, and scalable.

This is not a production readme. It is a project plan. Updates will be posted regularly as features are completed.

### Database Schema

* Users
  - Have many Groups
* Groups
  - Have many Users
  - Have many Modules
* Modules
  - Have one Group
  - Have many Topics
* Topics
  - Have one Module
  - Have many Articles
* Articles
  - Have one Topic
  - Have many Sections
  - Have many Videos
* Sections
  - Have one Article
* Collaborations
  - Join table for many:many relationship between Users and Groups

### Frontend Plan

* `/` ~ Front Page
  - Displays a pitch for the website's collaborative model
  - Includes modal for login
* `/signup`
  - Allows users to sign up
  - Users can either create or join a group on sign up
* `/groups` ~ Group Routes
  - `/` ~ Index of all groups with search
  - `/:group_id` ~ Group description and list of all published modules
  - `/:group_id/admin` ~ Control panel for group admins
* `/modules` ~ Module Routes
  - Standard Users (No Login)
    - `/` ~ Index of all modules with search
    - `/:module_id` ~ Introduction to module
    - `/:module_id/topics/:topic_id` ~ Introduction to topic
    - `/:module_id/topics/:topic_id/articles/:article_id` ~ Individual article
  - Editors
    - `/new` ~ Form to create a new module
    - `/:module_id/topics/new` ~ Form to create a new topic
    - `/:module_id/topics/:topic_id/articles/new` ~ Form to create a new article
    - `/edit` ~ Form to edit module
    - `/:module_id/topics/:topic_id/edit` ~ Form to edit topic
    - `/:module_id/topics/:topic_id/articles/:article_id/edit` ~ Form to edit article
* `/users` ~ User routes
  - `/:user_id` ~ User profile
  - `/:user_id/edit` ~ Edit user form
