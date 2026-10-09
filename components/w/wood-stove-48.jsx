import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm_t_jblc.css';
import '../../css/j/jztm0fbrx.css';
import '../../css/t/tbrtq8bna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm_t_jblc"/><path class="jztm0fbrx"/><path class="tbrtq8bna"/>`,
		"fallback": "energy-icons:wood-stove-48",
	});
}

export default Component;
