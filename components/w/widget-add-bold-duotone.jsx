import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuv2pzbjk.css';
import '../../css/b/b2f0rdb6m.css';
import '../../css/l/lmwlcacsv.css';
import '../../css/x/xp8rjqbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuv2pzbjk"/><path class="b2f0rdb6m"/><path class="lmwlcacsv"/><path class="xp8rjqbem"/>`,
		"fallback": "solar:widget-add-bold-duotone",
	});
}

export default Component;
