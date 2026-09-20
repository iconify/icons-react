import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4_lrfb5n.css';
import '../../css/s/scnvldbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4_lrfb5n"/><path class="scnvldbzx"/>`,
		"fallback": "octicon:zoom-out-24",
	});
}

export default Component;
