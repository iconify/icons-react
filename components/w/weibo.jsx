import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-zy4fbdl.css';
import '../../css/e/ezgn372ii.css';
import '../../css/f/f448ez1yz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe29Xbbzw"><g class="ft5dv1b6b"><path class="w-zy4fbdl"/><path class="ezgn372ii"/><path class="f448ez1yz"/></g></mask></defs><path mask="url(#SVGe29Xbbzw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:weibo",
	});
}

export default Component;
