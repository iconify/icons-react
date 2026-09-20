import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueu-zdbxw.css';
import '../../css/m/m_hk1_b6x.css';
import '../../css/g/g4uvfabpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueu-zdbxw"/><path class="m_hk1_b6x"/><path class="g4uvfabpz"/>`,
		"fallback": "token:zen",
	});
}

export default Component;
