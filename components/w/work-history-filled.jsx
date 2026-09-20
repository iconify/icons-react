import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv1-qn0hn.css';
import '../../css/e/ezy_p22ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv1-qn0hn"/><path class="ezy_p22ip"/>`,
		"fallback": "tdesign:work-history-filled",
	});
}

export default Component;
