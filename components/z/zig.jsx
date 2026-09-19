import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spd74y6rp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spd74y6rp"/>`,
		"fallback": "catppuccin:zig",
	});
}

export default Component;
