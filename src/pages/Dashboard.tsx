import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Eye, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const observationTypes = [
  "Senior School Learning Observation",
  "Senior School Learning Walk", 
  "Senior School Self Assessment",
  "Senior School Support Plan",
  "Senior School Peer Observation Reflection"
];

const teachers = [
  "Akan, Michael", "Almeida, Fabio", "Ascencio Dias, Ivan",
  "Backhouse, Robin", "Bagnariolli, Eduardo", "Baldon, Enrico",
  "Belmonte, Ana Carolina", "Best, Robert", "Bishop, Sam",
  "Bishop, Chantal", "Cababe, Bruna"
];

const keyStages = ["NA", "Key Stage 1", "Key Stage 2", "Key Stage 3", "Key Stage 4", "Key Stage 5"];

const subjects = [
  "IB Maths", "IGCSE Maths", "KS3 Maths", "Mathematics",
  "English Literature", "Physics", "Chemistry", "Biology"
];

const Dashboard = () => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [date, setDate] = useState<Date>();
  const [additionalObservers, setAdditionalObservers] = useState<string[]>([]);

  const addObserver = () => {
    setAdditionalObservers([...additionalObservers, ""]);
  };

  const removeObserver = (index: number) => {
    setAdditionalObservers(additionalObservers.filter((_, i) => i !== index));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
              
              {/* Cards sempre fixos em uma linha */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Card 1: Create a new observation */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow" 
                  onClick={() => setIsFormExpanded(true)}
                >
                  <CardContent className="p-0">
                    <div className="h-24 bg-sps-ruby relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10 p-6 text-center">
                        <Plus className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-background to-background/80">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Create a new observation</h3>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Observations made about you */}
                <Card className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-24 bg-sps-green relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10 p-6 text-center">
                        <Eye className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-background to-background/80">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Observations made about you</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">1 new</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 3: Observations created by you */}
                <Card className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-24 bg-sps-indigo relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10 p-6 text-center">
                        <Users className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-background to-background/80">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Observations created by you</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">10 unpublished</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário separado que aparece embaixo */}
              {isFormExpanded && (
                <Card className="w-full">
                  <CardHeader className="bg-sps-ruby text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Create a new observation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <Button 
                        onClick={addObserver}
                        className="w-full"
                        variant="outline"
                      >
                        + Add additional observers
                      </Button>
                      
                      {/* Additional Observers */}
                      {additionalObservers.map((observer, index) => (
                        <div key={index} className="flex gap-2">
                          <Select value={observer} onValueChange={(value) => {
                            const newObservers = [...additionalObservers];
                            newObservers[index] = value;
                            setAdditionalObservers(newObservers);
                          }}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select additional observer" />
                            </SelectTrigger>
                            <SelectContent>
                              {teachers.map((teacher) => (
                                <SelectItem key={teacher} value={teacher}>
                                  {teacher}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => removeObserver(index)}
                          >
                            ×
                          </Button>
                        </div>
                      ))}

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Observation Type
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Observation Type" />
                            </SelectTrigger>
                            <SelectContent>
                              {observationTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Who are you observing?
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Who are you observing?" />
                            </SelectTrigger>
                            <SelectContent>
                              {teachers.map((teacher) => (
                                <SelectItem key={teacher} value={teacher}>
                                  {teacher}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Subject List
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Subject List" />
                            </SelectTrigger>
                            <SelectContent>
                              {subjects.map((subject) => (
                                <SelectItem key={subject} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Key Stage/Class
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Key Stage/Class" />
                            </SelectTrigger>
                            <SelectContent>
                              {keyStages.map((stage) => (
                                <SelectItem key={stage} value={stage}>
                                  {stage}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select Date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1" variant="default">
                          Create Observation
                        </Button>
                        <Button variant="outline" onClick={() => setIsFormExpanded(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;