import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaa1ls8_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaa1ls8_f"/>`,
		"fallback": "streamline-plump-color:webcam-video-flat",
	});
}

export default Component;
