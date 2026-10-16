import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlgi8bc5k.css';
import '../../css/m/m99dslsql.css';
import '../../css/w/wfgnynomx.css';
import '../../css/k/ku8yoiynn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlgi8bc5k"/><path class="m99dslsql"/><path class="wfgnynomx"/><path class="ku8yoiynn"/>`,
		"fallback": "energy-icons:wood-pole-48",
	});
}

export default Component;
