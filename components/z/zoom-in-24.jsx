import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc15x1w_o.css';
import '../../css/s/scnvldbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc15x1w_o"/><path class="scnvldbzx"/>`,
		"fallback": "octicon:zoom-in-24",
	});
}

export default Component;
