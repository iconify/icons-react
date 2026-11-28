import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_c33vrot.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yb2znbbba.css';
import '../../css/z/zjsy4fbkc.css';
import '../../css/h/h89jzn-jj.css';
import '../../css/k/ksf5uac5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z_c33vrot"/><g class="dt0cm9dhy primary"><path class="yb2znbbba"/><path class="zjsy4fbkc"/><path class="h89jzn-jj"/><path class="ksf5uac5s"/></g>`,
		"fallback": "iconaut:wheelchair-duo",
	});
}

export default Component;
