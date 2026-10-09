import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0rf3fb-u.css';
import '../../css/s/s_gjiybtk.css';
import '../../css/v/v3cog_bvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0rf3fb-u"/><path class="s_gjiybtk"/><path class="v3cog_bvy"/>`,
		"fallback": "energy-icons:wind-direction-48",
	});
}

export default Component;
