INSERT INTO roles(title)
VALUES 
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'test@gmail.com', 'test', 'test');

INSERT INTO blog_categories (label, description)
VALUES
('Javascript', 'vatete asfsd f sdf ');

INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'title', 'text', '', 'test.jpg', 1, 'tag1', 'tag2', 'test.jpg', 'Image');


INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(3, 1, 'lorem upsum lorem '),
(4, 1, 'safsaggasgsggsgssg');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(4, 1);