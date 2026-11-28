import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1w820bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1w820bfu"/>`,
		"fallback": "noviair:workflow-play",
	});
}

export default Component;
