import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5gxklb4l.css';
import '../../css/v/v4e6rhbkp.css';
import '../../css/a/anjo4ybes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGyczZNbTR)" class="l5gxklb4l"/><defs><radialGradient id="SVGyczZNbTR" cx="0" cy="0" r="1" gradientTransform="matrix(0 -12.4917 17.6003 0 12 17.3)" gradientUnits="userSpaceOnUse"><stop offset=".114" class="v4e6rhbkp"/><stop offset="1" class="anjo4ybes"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:wifi-24",
	});
}

export default Component;
