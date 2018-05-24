<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Minimal</title>
		<?php  include('layouts/head.php')  ?>
	</head>

	<body id="index">
		<?php  include('layouts/header.php')  ?>

		<div class="content">
			<div class="content__toggle mobile hamburger hamburger--arrow-r">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>

			<div class="content__toggle desktop hamburger hamburger--arrow is-active">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>

			<?php  include('layouts/sidebar.php')  ?>

			<main class="main">
				<div class="container">
					<div class="page-content">
						<h2>Quick start</h2>
						<p>Use one of the Vuetify Vue CLI packages (based on the official examples) to get your project started in no time. Vuetify supports SSR (server-side rendering), SPA (single page application), PWA (progressive web application) and standard HTML pages.</p>
						<h3>Supported Browsers</h3>
						<p>Vuetify is a progressive framework that attempts to push web development to the next level. In order to best accomplish this task, some sacrifices had to be made in terms of support for older versions of Internet Explorer. This is not an exhaustive list of compatible browsers, but the main targeted ones.</p>
						<h3>Reporting issues</h3>
						<ol>
							<li>The issue list of this repo is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.</li>
							<li>Try to search for your issue, <a href="#">it may have been answered.</a></li>
							<li>See if the error is reproducible with the latest version.</li>
						</ol>
						<ul>
							<li>The issue list of this repo is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.</li>
							<li>Try to search for your issue, <a href="#">it may have been answered.</a></li>
							<li>See if the error is reproducible with the latest version.</li>
						</ul>
						<h3>Setup local dev</h3>
						<p>Vuetify contains a local dev environment that you can bootup to test new features, functionality, and components. First, clone the repository</p>
						<img src="assets/images/image.jpeg" alt="image">
					</div>
				</div>
			</main>
		</div>

		<script src="assets/js/scripts.js"></script>
	</body>
</html>
