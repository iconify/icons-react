import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg24lgbwn.css';
import '../../css/u/ut59o-b4c.css';
import '../../css/a/acq_ddcuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg24lgbwn"/><path class="ut59o-b4c"/><path class="acq_ddcuz"/>`,
		"fallback": "token:white",
	});
}

export default Component;
