import { showAlert } from './mensajes';
import $ from 'jquery';
import "./estilos.scss";


document.getElementById("btn-alert").addEventListener("click",showAlert)

$('#btn-jquery').click(()=>alert('enviar jqury'))