import handlebars from 'handlebars';
import './avatar-input.scss';

export const avatarInputTmp = `<div class="avatar">
       <input type="file" id="avatar" name="avatar" class="avatar__input">
       <label for="avatar" class="avatar__input-label"></label></div>`

handlebars.registerPartial('avatar-input', avatarInputTmp);