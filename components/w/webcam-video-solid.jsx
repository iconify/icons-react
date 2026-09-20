import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpsm7jb6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpsm7jb6k"/>`,
		"fallback": "streamline-plump:webcam-video-solid",
	});
}

export default Component;
