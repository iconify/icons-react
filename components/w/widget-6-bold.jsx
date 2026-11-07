import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wui8tcbyn.css';
import '../../css/k/kh6yd2nhl.css';
import '../../css/i/i_vz0301x.css';
import '../../css/z/ziyj3ibvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wui8tcbyn"/><path class="kh6yd2nhl"/><path class="i_vz0301x"/><path class="ziyj3ibvq"/>`,
		"fallback": "solar:widget-6-bold",
	});
}

export default Component;
