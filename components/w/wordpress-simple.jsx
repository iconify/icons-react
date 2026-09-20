import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw6ui7bhy.css';
import '../../css/s/syf0cfsom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kw6ui7bhy"/><path class="syf0cfsom"/>`,
		"fallback": "uim:wordpress-simple",
	});
}

export default Component;
