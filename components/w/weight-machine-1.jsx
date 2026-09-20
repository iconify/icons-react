import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eypp7rb0r.css';
import '../../css/a/a224fdcsz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eypp7rb0r"/><path clip-rule="evenodd" class="a224fdcsz"/>`,
		"fallback": "lineicons:weight-machine-1",
	});
}

export default Component;
