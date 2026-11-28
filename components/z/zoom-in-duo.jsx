import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfdide9pn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/om8qxl02a.css';
import '../../css/j/jrqqhb3az.css';
import '../../css/u/uj4ngxb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfdide9pn secondary"/><g class="dt0cm9dhy primary"><path class="om8qxl02a"/><path class="jrqqhb3az"/><path class="uj4ngxb8y"/></g>`,
		"fallback": "iconaut:zoom-in-duo",
	});
}

export default Component;
