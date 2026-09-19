import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmab-___r.css';
import '../../css/e/emuyr7bck.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmab-___r"/><path class="emuyr7bck"/>`,
		"fallback": "catppuccin:wrangler",
	});
}

export default Component;
