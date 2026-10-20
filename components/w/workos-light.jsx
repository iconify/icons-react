import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smc74qbot.css';
import '../../css/u/u65_2lbpv.css';

const viewBox = {"width":55.4,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smc74qbot"/><path class="u65_2lbpv"/>`,
		"fallback": "thesvg-color:workos-light",
	});
}

export default Component;
