import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zca_fftim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zca_fftim"/>`,
		"fallback": "coolicons:webcam-fill-round",
	});
}

export default Component;
