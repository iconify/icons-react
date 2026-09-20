import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiqd2ab-u.css';
import '../../css/n/nfked6bdz.css';
import '../../css/m/mb-o73f0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iiqd2ab-u"/><path clip-rule="evenodd" class="nfked6bdz"/><path class="mb-o73f0t"/></g>`,
		"fallback": "streamline-plump-color:workspace-desk-flat",
	});
}

export default Component;
