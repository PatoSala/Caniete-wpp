-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-09-2021 a las 16:35:47
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `canetewpp_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `wpp_session` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `wpp_session`) VALUES
(1, 'Pato', 'pato@pato.com', 'pato.com', '{\"WABrowserId\":\"\\\"Aoxc6lmHzwMukeVRWu4UjQ==\\\"\",\"WASecretBundle\":\"{\\\"key\\\":\\\"u4eca70Hmq3cQjIvwmfm5UUVp7S8zvIlxinYPBKyhOY=\\\",\\\"encKey\\\":\\\"u2ELDFHhPyZMbUYJfPLvON0z2gKEkyrvKxme7Hk/Crg=\\\",\\\"macKey\\\":\\\"u4eca70Hmq3cQjIvwmfm5UUVp7S8zvIlxinYPBKyhOY=\\\"}\",\"WAToken1\":\"\\\"2g0ZyCDAyr2DEeRlNZkjDhVkax3ZCZpkgoODJ+qVLUeDLABrdveAXcetpzXjLzoNvPPUqLjM/Si3s20V8WfaNA==\\\"\",\"WAToken2\":\"\\\"1@1RMuJRZtcsXrVyk1hFO+PabEd+khpnDXx/Ao/zIBV0ulX0XUTqMeWdaNcjNF6BZgVti03+GSoSKZ0w==\\\"\"}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
