import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ehih-0bcs.css';
import '../../css/e/eghp0hy0p.css';
import '../../css/s/sagf9na8p.css';
import '../../css/i/i_aizmszx.css';
import '../../css/l/lpe7-_bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ehih-0bcs wm-shadow"/><path class="eghp0hy0p wm-shadow"/><path class="sagf9na8p"/><path class="i_aizmszx"/><path class="lpe7-_bfp"/></g>`,
		"fallback": "withicons-brutal:wine",
	});
}

export default Component;
