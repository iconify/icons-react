import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnm3l5bqe.css';
import '../../css/e/ehym_vpmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnm3l5bqe"/><path class="ehym_vpmn"/>`,
		"fallback": "energy-icons:wheelchair-48",
	});
}

export default Component;
