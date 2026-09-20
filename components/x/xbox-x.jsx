import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5kh6zufi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5kh6zufi"/>`,
		"fallback": "tabler:xbox-x",
	});
}

export default Component;
