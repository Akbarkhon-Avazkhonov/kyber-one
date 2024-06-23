'use client';
import { ListItem, ListItemButton, ListItemContent, Typography } from "@mui/joy";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    title: string;
    href: string;
    icon: React.ReactNode;
}
export default  function NavLink(
    props: NavLinkProps 
) {
    const url = usePathname();
    console.log(url);
    return (
        <Link 
        href={
            props.href
        }
        style={
            {
                textDecoration: 'none',
                color: 'inherit'
            }
        }
        >
        <ListItem>
        <ListItemButton selected={
            url === props.href
        }>
          {
            props.icon 
          }
          <ListItemContent>
            <Typography level="title-sm">
                {
                    props.title
                }
            </Typography>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
      </Link>
    );
}