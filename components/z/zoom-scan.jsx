import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ia4j52q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-ia4j52q"/>`,
		"fallback": "tabler:zoom-scan",
	});
}

export default Component;
