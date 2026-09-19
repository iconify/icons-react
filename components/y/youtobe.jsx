import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/d/dwhj-nzls.css';
import '../../css/c/c9_-b0brr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9SKiadwd"><g class="v1_swcb_o"><path class="dwhj-nzls"/><path class="c9_-b0brr"/></g></mask></defs><path mask="url(#SVG9SKiadwd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:youtobe",
	});
}

export default Component;
