import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8spygx2w.css';
import '../../css/r/rjrkgcc1w.css';
import '../../css/l/lxpqrmtxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8spygx2w"/><path class="rjrkgcc1w"/><path class="lxpqrmtxo"/>`,
		"fallback": "energy-icons:worm-gear-48-bold",
	});
}

export default Component;
