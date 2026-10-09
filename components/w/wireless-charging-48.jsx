import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwn5zdbbq.css';
import '../../css/c/csaqs8n_p.css';
import '../../css/s/sscizya7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwn5zdbbq"/><path class="csaqs8n_p"/><path class="sscizya7w"/>`,
		"fallback": "energy-icons:wireless-charging-48",
	});
}

export default Component;
