import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpzah33py.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lt965zxon.css';
import '../../css/z/zdxlfedsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zpzah33py"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lt965zxon"/><path class="zdxlfedsw"/></g>`,
		"fallback": "iconaut:yin-yang-duo",
	});
}

export default Component;
