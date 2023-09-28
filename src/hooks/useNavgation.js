import NavigationContext from "../contexts/navigation";
import { useContext } from "react";
export default function useNavigation () {
    return useContext(NavigationContext);
}