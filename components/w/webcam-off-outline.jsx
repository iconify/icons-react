import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb03qvb5t.css';
import '../../css/d/d-uqe5b9k.css';
import '../../css/e/exclbqmqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb03qvb5t"/><path clip-rule="evenodd" class="d-uqe5b9k"/><path class="exclbqmqt"/>`,
		"fallback": "solar:webcam-off-outline",
	});
}

export default Component;
