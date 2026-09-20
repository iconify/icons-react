import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spyss-1is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spyss-1is"/>`,
		"fallback": "tabler:xbox-y-filled",
	});
}

export default Component;
