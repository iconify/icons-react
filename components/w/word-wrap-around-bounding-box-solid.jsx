import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qctbfml7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qctbfml7g"/>`,
		"fallback": "streamline-flex:word-wrap-around-bounding-box-solid",
	});
}

export default Component;
