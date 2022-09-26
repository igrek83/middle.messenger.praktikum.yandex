import handlebars from 'handlebars';
import './user-item.scss';

export const userItemTmp = `<li class="user-item">
                                <span class="user-item__avatar"></span>
                                <div class="user-item__block">
                                    <div class="user-item__box">
                                        <span class="user-item__user">Андрей</span>
                                        <span class="user-item__message">Друзья, у меня для вас особенный выпуск 
                                            новостей! Миллионы россиян ежедневно проводят десятки часов
                                        </span>
                                    </div>
                                    <div class="user-item__box">
                                        <time class="user-item__time">10:49</time>
                                        <span class="user-item__counter">2</span>
                                    </div>
                                </div>
                            </li>`

handlebars.registerPartial('user-item', userItemTmp);