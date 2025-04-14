<?php
$tipo_evento = $_POST['tipo_evento'] ?? 'mixto';
$tipo_salon = $_POST['tipo_salon'] ?? 'aire libre';
$tipo_buffet = $_POST['tipo_buffet'] ?? 'internacional';
$tipo_servicio = $_POST['tipo_servicio'] ?? 'cóctel';
$audio_video = $_POST['audio_video'] ?? 'sí';
$fecha = $_POST['fecha'] ?? '2025-04-15';
$hora_inicio = $_POST['hora_inicio'] ?? '18:00';
$hora_fin = $_POST['hora_fin'] ?? '00:00';
$asistencia = $_POST['asistencia'] ?? 'electrónico';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Planificación del Evento</title>
  <style>
    body { font-family: Arial; background: #f0f0f0; margin: 0; padding: 0; }
    header, footer { background: #efb810; color: white; text-align: center; padding: 20px; }
    .container { padding: 20px; }
    .section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 0 10px #ccc; }
    img { max-width: 100%; border-radius: 10px; margin-top: 10px; }
    h2 { color: #333; }
     /* Estilo para WebKit (Chrome, Safari, Edge) */
     ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #e3f2fd; /* azul muy claro */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #90caf9; /* celeste claro */
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #64b5f6;
    }
  </style>
</head>
<body>

<header>
  <h1>Planificación del Evento</h1>
  <p>Organización según tus elecciones</p>
</header>

<div class="container">

  <div class="section">
    <h2>Confirmación de Fecha y Horario</h2>
    <p><strong>Fecha:</strong> <?= htmlspecialchars($fecha) ?></p>
    <p><strong>Horario:</strong> Desde <?= htmlspecialchars($hora_inicio) ?> hasta <?= htmlspecialchars($hora_fin) ?></p>
  </div>

  <div class="section">
    <h2>Tipo de Evento</h2>
    <?php if ($tipo_evento == 'mixto'): ?>
      <p>Este es un evento mixto que abarca:</p>
      <ul>
        <li>Cumpleaños de 15</li>
        <li>Cumpleaños de 18</li>
        <li>Baby Shower</li>
        <li>Comunión</li>
        <li>Bar/Bat Mitzvah</li>
      </ul>
      <img src="img/mixto-eventos.jpg" alt="Eventos mixtos">
    <?php else: ?>
      <p>Tipo seleccionado: <?= htmlspecialchars($tipo_evento) ?></p>
      <img src="img/<?= strtolower($tipo_evento) ?>.jpg" alt="Tipo de evento">
    <?php endif; ?>
  </div>

  <div class="section">
    <h2>Tipo de Salón</h2>
    <p><?= htmlspecialchars($tipo_salon) ?></p>
    <img src="img/salon-<?= str_replace(' ', '-', strtolower($tipo_salon)) ?>.jpg" alt="Salón elegido">
  </div>

  <div class="section">
    <h2>Buffet Seleccionado</h2>
    <p><?= htmlspecialchars($tipo_buffet) ?></p>
    <img src="img/buffet-<?= str_replace(' ', '-', strtolower($tipo_buffet)) ?>.jpg" alt="Buffet elegido">
  </div>

  <div class="section">
    <h2>Tipo de Servicio</h2>
    <p><?= htmlspecialchars($tipo_servicio) ?></p>
    <img src="img/servicio-<?= str_replace(' ', '-', strtolower($tipo_servicio)) ?>.jpg" alt="Servicio elegido">
  </div>

  <div class="section">
    <h2>Audio y Video</h2>
    <?php if ($audio_video === 'sí'): ?>
      <p>El evento contará con sistemas de sonido e imagen.</p>
      <img src="img/audio-video.jpg" alt="Audio y video">
    <?php else: ?>
      <p>No se utilizarán sistemas audiovisuales.</p>
    <?php endif; ?>
  </div>

  <div class="section">
    <h2>Personal y Atención</h2>
    <p>Contarás con un equipo de personal capacitado para atender a los invitados, servir en buffet, recepción, coordinación general y control de actividades.</p>
    <img src="img/personal-servicio.jpg" alt="Personal de servicio">
  </div>

  <div class="section">
    <h2>Registro de Asistencia</h2>
    <?php if ($asistencia === 'electrónico'): ?>
      <p>El control de asistencia se realizará de manera electrónica, mediante tablets o QR.</p>
      <img src="img/registro-electronico.jpg" alt="Registro electrónico">
    <?php else: ?>
      <p>Se usará un registro de asistencia manual en papel.</p>
      <img src="img/registro-manual.jpg" alt="Registro manual">
    <?php endif; ?>
  </div>

  <div class="section">
    <h2>Control de Tiempos</h2>
    <p>Se organizarán todas las actividades en bloques horarios para que nada se retrase y todo se desarrolle según lo planeado.</p>
    <img src="img/control-tiempos.jpg" alt="Cronograma">
  </div>

  <div class="section">
    <h2>Atención de Imprevistos</h2>
    <p>Disponemos de un protocolo de actuación ante emergencias o fallos técnicos, con equipo de reemplazo y personal disponible para resolver rápidamente.</p>
    <img src="img/imprevistos.jpg" alt="Resolución de imprevistos">
  </div>

  <div class="section">
    <h2>Limpieza Final</h2>
    <p>Al finalizar el evento, nuestro equipo se encarga de dejar el salón en condiciones óptimas, incluyendo recolección de residuos, limpieza profunda y control de inventario.</p>
    <img src="img/limpieza.jpg" alt="Limpieza del evento">
  </div>

  <div class="section">
    <h2>Revisión de Calidad del Servicio</h2>
    <p>Después del evento, realizamos una revisión interna para verificar que se haya cumplido cada punto del contrato y los estándares de calidad.</p>
    <img src="img/revision-calidad.jpg" alt="Control de calidad">
  </div>

</div>
</body>
</html>
