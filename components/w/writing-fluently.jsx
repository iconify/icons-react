import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rhpadfb-h.css';
import '../../css/g/gbv6hcmjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="rhpadfb-h"/><path class="gbv6hcmjx"/></g>`,
		"fallback": "icon-park-outline:writing-fluently",
	});
}

export default Component;
