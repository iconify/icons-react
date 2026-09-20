import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u424brbrp.css';
import '../../css/b/bdi3fdcsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u424brbrp"/><path class="bdi3fdcsp"/>`,
		"fallback": "streamline-ultimate:workflow-teamwork-user-high-five-bold",
	});
}

export default Component;
